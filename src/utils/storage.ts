export interface SeizureLogEntry {
    id: string;
    date: string;
    time: string;
    duration?: string;
    triggers: string[];
    notes?: string;
    timestamp: number;
}

export interface UserStats {
    quizHighScores: Record<number, number>;
    lastQuizDate?: string;
    seizureStreakStart?: string;
}

const KEYS = {
    LOGS: 'epilepsy_app_logs',
    STATS: 'epilepsy_app_stats'
};

export const StorageService = {
    getLogs: (): SeizureLogEntry[] => {
        try {
            const logs = localStorage.getItem(KEYS.LOGS);
            return logs ? JSON.parse(logs) : [];
        } catch {
            return [];
        }
    },

    addLog: (entry: Omit<SeizureLogEntry, 'id' | 'timestamp'>) => {
        const logs = StorageService.getLogs();
        const newEntry = {
            ...entry,
            id: crypto.randomUUID(),
            timestamp: new Date().getTime()
        };
        logs.unshift(newEntry);
        localStorage.setItem(KEYS.LOGS, JSON.stringify(logs));

        // Reset streak to today
        StorageService.resetStreak();
        return newEntry;
    },

    getStats: (): UserStats => {
        try {
            const stats = localStorage.getItem(KEYS.STATS);
            return stats ? JSON.parse(stats) : { quizHighScores: {} };
        } catch {
            return { quizHighScores: {} };
        }
    },

    saveQuizScore: (quizId: number, score: number) => {
        const currentStats = StorageService.getStats();
        const existingHighScore = currentStats.quizHighScores[quizId] || 0;

        if (score > existingHighScore) {
            currentStats.quizHighScores[quizId] = score;
        }
        currentStats.lastQuizDate = new Date().toISOString();

        // Check if stats exist, if not initialize properly
        if (!currentStats.quizHighScores) currentStats.quizHighScores = {};

        localStorage.setItem(KEYS.STATS, JSON.stringify(currentStats));
    },

    resetStreak: () => {
        const stats = StorageService.getStats();
        stats.seizureStreakStart = new Date().toISOString();
        localStorage.setItem(KEYS.STATS, JSON.stringify(stats));
    },

    getStreakDays: (): number => {
        const stats = StorageService.getStats();
        if (!stats.seizureStreakStart) return 0;

        const last = new Date(stats.seizureStreakStart).getTime();
        const now = new Date().getTime();
        const diff = now - last;
        // If diff is negative (future date?), return 0
        if (diff < 0) return 0;

        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
};

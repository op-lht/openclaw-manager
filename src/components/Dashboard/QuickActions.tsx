import { Play, Square, RotateCcw, Stethoscope, CheckCircle, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

interface ServiceStatus {
  running: boolean;
  pid: number | null;
  port: number;
}

export interface QuickActionFeedback {
  type: 'success' | 'error';
  message: string;
}

interface QuickActionsProps {
  status: ServiceStatus | null;
  loading: boolean;
  diagnoseLoading?: boolean;
  feedback?: QuickActionFeedback | null;
  onStart: () => void;
  onStop: () => void;
  onRestart: () => void;
  onDiagnose: () => void;
}

export function QuickActions({
  status,
  loading,
  diagnoseLoading = false,
  feedback,
  onStart,
  onStop,
  onRestart,
  onDiagnose,
}: QuickActionsProps) {
  const { t } = useTranslation();
  const isRunning = status?.running || false;
  const busy = loading || diagnoseLoading;

  return (
    <div className="bg-surface-card rounded-2xl p-6 border border-edge">
      <h3 className="text-lg font-semibold text-content-primary mb-4">快捷操作</h3>

      {feedback ? (
        <div
          className={clsx(
            'mb-4 p-3 rounded-lg border flex items-center gap-2',
            feedback.type === 'success'
              ? 'bg-green-500/10 border-green-500/30 text-green-400'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          )}
        >
          {feedback.type === 'success' ? <CheckCircle size={16} /> : <XCircle size={16} />}
          <span className="text-sm">{feedback.message}</span>
        </div>
      ) : null}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={onStart}
          disabled={busy || isRunning}
          className={clsx(
            'flex flex-col items-center gap-3 p-4 rounded-xl transition-all',
            'border border-edge',
            isRunning
              ? 'bg-surface-elevated opacity-50 cursor-not-allowed'
              : 'bg-surface-elevated hover:bg-green-500/20 hover:border-green-500/50'
          )}
        >
          <div
            className={clsx(
              'w-12 h-12 rounded-full flex items-center justify-center',
              isRunning ? 'bg-surface-elevated' : 'bg-green-500/20'
            )}
          >
            <Play
              size={20}
              className={isRunning ? 'text-content-tertiary' : 'text-green-400'}
            />
          </div>
          <span
            className={clsx(
              'text-sm font-medium',
              isRunning ? 'text-content-tertiary' : 'text-content-secondary'
            )}
          >
            {t('quickActions.start')}
          </span>
        </button>

        <button
          onClick={onStop}
          disabled={busy || !isRunning}
          className={clsx(
            'flex flex-col items-center gap-3 p-4 rounded-xl transition-all',
            'border border-edge',
            !isRunning
              ? 'bg-surface-elevated opacity-50 cursor-not-allowed'
              : 'bg-surface-elevated hover:bg-red-500/20 hover:border-red-500/50'
          )}
        >
          <div
            className={clsx(
              'w-12 h-12 rounded-full flex items-center justify-center',
              !isRunning ? 'bg-surface-elevated' : 'bg-red-500/20'
            )}
          >
            <Square
              size={20}
              className={!isRunning ? 'text-content-tertiary' : 'text-red-400'}
            />
          </div>
          <span
            className={clsx(
              'text-sm font-medium',
              !isRunning ? 'text-content-tertiary' : 'text-content-secondary'
            )}
          >
            {t('quickActions.stop')}
          </span>
        </button>

        <button
          onClick={onRestart}
          disabled={busy}
          className={clsx(
            'flex flex-col items-center gap-3 p-4 rounded-xl transition-all',
            'border border-edge',
            'bg-surface-elevated hover:bg-amber-500/20 hover:border-amber-500/50'
          )}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-500/20">
            <RotateCcw
              size={20}
              className={clsx('text-amber-400', loading && 'animate-spin')}
            />
          </div>
          <span className="text-sm font-medium text-content-secondary">重启</span>
        </button>

        <button
          type="button"
          onClick={onDiagnose}
          disabled={busy}
          className={clsx(
            'flex flex-col items-center gap-3 p-4 rounded-xl transition-all',
            'border border-edge',
            'bg-surface-elevated hover:bg-purple-500/20 hover:border-purple-500/50'
          )}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-500/20">
            <Stethoscope
              size={20}
              className={clsx('text-purple-400', diagnoseLoading && 'animate-spin')}
            />
          </div>
          <span className="text-sm font-medium text-content-secondary">诊断</span>
        </button>
      </div>
    </div>
  );
}

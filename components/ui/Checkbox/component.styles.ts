import styles from '@/lib/styles';

const IconStyles = styles('h-3 w-3', {
  disabled: {
    true: 'text-gray-500',
    false: '',
  },
  checked: {
    true: 'dark:text-black text-white',
    false: 'text-transparent',
  },
});

const LabelStyles = styles('text-sm', {
  disabled: {
    true: 'text-gray-500 dark:text-gray-600',
    false: '',
  },
});

export { IconStyles, LabelStyles };

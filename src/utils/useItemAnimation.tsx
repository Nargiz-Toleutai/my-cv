import { useEffect } from 'react';
import { useAnimate, stagger, Segment } from 'framer-motion';

export const useItemAnimation = (isSelected: boolean) => {
  const [item, animate] = useAnimate();

  useEffect(() => {
    const itemAnimations = isSelected
      ? [
          [
            '.portfolio-project',
            { transform: 'translateX(0%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            '.portfolio-project img',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
        ]
      : [
          [
            '.portfolio-project',
            { transform: 'translateX(-100%)' },
            { at: '-0.1' },
          ],
          [
            '.portfolio-project img',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
        ];

    animate([
      [
        'path.top',
        { d: isSelected ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isSelected ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isSelected ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...(itemAnimations as Segment[]),
    ]);
  }, [isSelected, animate]);

  return item;
};

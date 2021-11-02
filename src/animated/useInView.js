import React from 'react'

export function useInView(options) {
  const [ref, setRef] = React.useState(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(
    () => {
        if (!ref) return
        
        const intersectionOptions = {
            threshold: options.threshold || 0,
        }
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                setInView(entry.isIntersecting)
                if (options.triggerOnce && entry.isIntersecting) {
                    obs.unobserve(ref)
                }
            });
        }, intersectionOptions);
        observer.observe(ref)
        return () => {
          observer.unobserve(ref)
        }
    },
    [ref],
  )

  return [setRef, inView]
}
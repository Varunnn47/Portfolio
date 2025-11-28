// Analytics and Performance Tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters)
  }
}

export const trackPageView = (pagePath) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath
    })
  }
}

export const trackScroll = (scrollPercentage) => {
  trackEvent('scroll', {
    scroll_depth: scrollPercentage
  })
}

export const trackDownload = (fileName) => {
  trackEvent('file_download', {
    file_name: fileName
  })
}

export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', {
    form_name: formName
  })
}

export const trackProjectView = (projectName) => {
  trackEvent('project_view', {
    project_name: projectName
  })
}

// Performance monitoring
export const measurePerformance = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0]
        
        trackEvent('performance', {
          load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
          first_paint: Math.round(performance.getEntriesByType('paint')[0]?.startTime || 0)
        })
      }, 0)
    })
  }
}
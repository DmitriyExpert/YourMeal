export function detectDeviceType() {
  const userAgent = navigator.userAgent
  const maxTouchPoints = navigator.maxTouchPoints || navigator.msMaxTouchPoints || 0
  const isMobileUA = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (maxTouchPoints > 0 && !/iPad/i.test(userAgent) && isMobileUA) {
    return 'mobile';
  }

  if (window.innerWidth <= 1024 && window.innerWidth > 768) {
      return 'laptop'; 
  }

  if (window.innerWidth <= 768 && maxTouchPoints > 0) {
      return 'mobile'; 
  }

  return 'desktop';
}
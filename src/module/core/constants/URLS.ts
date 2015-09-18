export interface IURLS {
  base: string,
  config: string,
  personalization: {
    imagesUrl: string
  }
}

export var urls:IURLS = {
  base: window.location.origin,
  config: window.location.origin + '/src/config/config.json',
  personalization: {
    imagesUrl: window.location.origin + '/src/public/branding/images/'
  }
};
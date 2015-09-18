export interface IURLS {
  base: string,
  config: string,
  login: {
    url: string
  },
  personalization: {
    imagesUrl: string,
    logo: {
      defaultImage: string,
      clientImage: string
    }
  },
  books: string,
  vanilia: {
    serverName: string;
  }
}

export var urls:IURLS = {
  base: window.location.origin,
  config: window.location.origin + '/src/config/config.json',
  personalization: {
    imagesUrl: window.location.origin + '/src/public/branding/images/',
    logo: {
      defaultImage: 'logo_default.png',
      clientImage: 'logo_client.png'
    }
  }
};
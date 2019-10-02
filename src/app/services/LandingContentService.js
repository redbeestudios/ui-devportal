import fetch from "isomorphic-fetch";

class LandingContentService {
  constructor() {
    this.PORT = process.env.APP_PORT ? `:${process.env.APP_PORT}` : '';
    this.BASE_URL = `${process.env.APP_URL}${this.PORT}`;

    // the class constructor
    if(! LandingContentService.instance){
      LandingContentService.instance = this;
    }
    return LandingContentService.instance;
  }

  findContent() {
    return fetch(`${this.BASE_URL}/api/landing-content`)
        .then(res => res.json());
  }
}

const instance = new LandingContentService();

// prevents new properties from being added to the object
Object.freeze(instance);
export default instance;
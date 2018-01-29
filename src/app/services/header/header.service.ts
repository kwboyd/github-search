import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  parseLinkHeader(header) {
    // parses a link list from header and returns an object that includes the 'next' and 'prev' links
    // code adapted from https://gist.github.com/niallo/3109252
    if (!header || header.length === 0) {
      // if there is no header (no next or previous pages) return null
      return null;
    }
    // split parts by comma
    const parts = header.split(',');
    const links = {};
    // parse each part into a named link
    for (let i = 0; i < parts.length; i++) {
      const section = parts[i].split(';');
      if (section.length !== 2) {
          throw new Error('Section could not be split on ;');
      }
      const url = section[0].replace(/<(.*)>/, '$1').trim();
      const name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    }
    return links;
  }

}

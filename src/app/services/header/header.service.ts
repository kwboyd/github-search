import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  constructor() { }

  
  parseLinkHeader(header) {
    // parses a link list from header and returns an object that includes the 'next' and 'prev' links
    // code from https://gist.github.com/niallo/3109252
    if (header.length === 0) {
      throw new Error("input must not be of zero length");
    }
    // Split parts by comma
    var parts = header.split(',');
    var links = {};
    // Parse each part into a named link
    for (var i = 0; i < parts.length; i++) {
      var section = parts[i].split(';');
      if (section.length !== 2) {
          throw new Error("section could not be split on ';'");
      }
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    }
    return links;
  }
}

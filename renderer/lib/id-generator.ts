import _ = require('underscore');

let ids: IDict<number> = {};

function generate(category: string) {
  if (_.isUndefined(ids[category])) {
    ids[category] = 0;
  }
  ids[category] += 1;
  return ids[category];
}

export = generate;

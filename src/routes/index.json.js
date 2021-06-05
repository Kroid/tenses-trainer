import fs from 'fs';
import yml from 'js-yaml';

export function get() {
  let data = fs.readFileSync(`src/data/sentences.yml`, { encoding: 'utf-8' })
  return {
    body: yml.load(data),
  }
}

import { capitalize } from '@material-ui/core';
import objectGet from 'lodash.get';

export function mapSourcesToObject(
  object: { [key: string]: any },
  sources: string[]
): string {
  return sources
    ?.map((source) => objectGet(object, source.split('.').map(capitalize)))
    .join(' ');
}

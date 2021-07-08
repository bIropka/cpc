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

export function getRowValue(
  object: { [key: string]: any },
  sources: string[]
): string {
  if (!sources) {
    return '';
  }

  const result = objectGet(object, sources.map(capitalize));
  return result && result.toLowerCase();
}

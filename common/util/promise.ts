import { chunk } from 'lodash'

export const batchedWaitAll = async <T>(
  promises: Promise<T>[],
  batchSize = 10
) => {
  const result = []
  for (const batch of chunk(promises, batchSize)) {
    result.push(...(await Promise.all(batch)))
  }
  return result
}

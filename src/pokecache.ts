export type CacheEntry<T> = {
    createdAt: number;
    val: T
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number = 0;
  
  constructor(num: number){
    this.#interval = num
    this.#startReapLoop()
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, {
      createdAt: Date.now(),
      val,
    })
  }
  get<T>(key: string): T | undefined {
    const entry =  this.#cache.get(key)
    if (!entry) {return undefined}
    return entry.val
  }

  #reap() {
    for (const [key, value] of this.#cache) {
        if (value.createdAt < (Date.now() - this.#interval)) {
            this.#cache.delete(key)
        }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval)
  }  

  stopReapLoop() {
    clearInterval(this.#reapIntervalId)
    this.#reapIntervalId = undefined
  }

}


// critical issues
// this context. this context can be locked inside a callback by using arrow function
// stale
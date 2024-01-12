module.exports = {
  experimental: {
    concurrentFeatures: true,
    workerThreads: true,  
  },
  jest: {
    // increase maxWorkers 
    maxWorkers: 10,
    // increase retries
    retryTimes: 3,
    // retry on failures
    retryOnFailure: true 
  }
}

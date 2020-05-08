### Process

1. Cache scrapes **xivapi** for full data on each item  
  a. Each item grab is attempted up to 5 times with a 1s retry
2. Build consolidates that raw data  
  a. Removing fields not used by the app  
  b. Renaming fields for readability in app code  
  c. Sorting the data as necessary  

import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import axios from 'axios';

const BACKGROUND_FETCH_TASK = 'background-fetch';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    const response = await axios.get('http://194.238.17.67/tc-lottery-prediction');
    const tcData = response.data.data;
    // Save the fetched data to AsyncStorage or other state management
    console.log('Background fetch data:', tcData);
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('Background fetch failed:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const registerBackgroundFetchAsync = async () => {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 60, // fetch data every 60 seconds
    stopOnTerminate: false, // continue fetches even if the app is terminated
    startOnBoot: true, // start background fetch on device boot
  });
};

const unregisterBackgroundFetchAsync = async () => {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
};

export { registerBackgroundFetchAsync, unregisterBackgroundFetchAsync };

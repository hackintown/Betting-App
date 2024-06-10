import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, ActivityIndicator, Snackbar } from 'react-native-paper';
import * as Updates from 'expo-updates';

const CheckForUpdates: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  // Function to check for updates
  const checkForUpdates = async () => {
    setIsLoading(true);
    try {
      await Updates.checkForUpdateAsync();
    } catch (error) {
      console.error('Error checking for updates:', error);
      setErrorMessage('Failed to check for updates. Please try again.');
      setIsSnackbarVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle retrying after an update error
  const handleRetry = () => {
    setErrorMessage('');
    setIsSnackbarVisible(false);
    checkForUpdates();
  };

  // Function to handle updating the app
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await Updates.fetchUpdateAsync();
      setIsLoading(false);
      Updates.reloadAsync();
    } catch (error) {
      console.error('Error updating the app:', error);
      setErrorMessage('Failed to update the app. Please try again.');
      setIsSnackbarVisible(true);
      setIsLoading(false);
    }
  };

  // useEffect hook to check for updates when the component mounts
  useEffect(() => {
    checkForUpdates();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" animating />
      ) : (
        <Button
          mode="contained"
          onPress={handleUpdate}
          style={styles.updateButton}
        >
          Check for Updates
        </Button>
      )}
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={() => setIsSnackbarVisible(false)}
        action={{
          label: 'Retry',
          onPress: handleRetry,
        }}
      >
        {errorMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  updateButton: {
    marginTop: 10,
  },
});

export default CheckForUpdates;

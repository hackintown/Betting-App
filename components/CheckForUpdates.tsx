// components/CheckForUpdates.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ActivityIndicator, Snackbar } from 'react-native-paper';
import * as Updates from 'expo-updates';

const CheckForUpdates: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const checkForUpdates = async () => {
    setIsLoading(true);
    try {
      await Updates.checkForUpdateAsync();
    } catch (e) {
      console.error('Error checking for updates:', e);
      setErrorMessage('Failed to check for updates. Please try again.');
      setVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);

  const handleRetry = () => {
    setErrorMessage('');
    setVisible(false);
    checkForUpdates();
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await Updates.fetchUpdateAsync();
      setIsLoading(false);
      Updates.reloadAsync();
    } catch (e) {
      console.error('Error updating the app:', e);
      setErrorMessage('Failed to update the app. Please try again.');
      setVisible(true);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" animating />}
      {!isLoading && (
        <Button
          mode="contained"
          onPress={handleUpdate}
          style={styles.updateButton}
        >
          Check for Updates
        </Button>
      )}
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
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

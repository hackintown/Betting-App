// components/CheckForUpdates.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ActivityIndicator, Snackbar } from 'react-native-paper';
import * as Updates from 'expo-updates';

const CheckForUpdates: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const checkForUpdates = async () => {
    setIsLoading(true);
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        setIsUpdated(true);
      } else {
        setUpdateMessage('The app is up to date.');
      }
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

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" animating />}
      {!isLoading && isUpdated && (
        <Button
          mode="contained"
          onPress={() => Updates.reloadAsync()}
          style={styles.updateButton}
        >
          An update is available. Reload the app?
        </Button>
      )}
      {!isLoading && !isUpdated && <Text>{updateMessage}</Text>}
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

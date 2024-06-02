// components/CheckForUpdates.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import * as Updates from 'expo-updates';

const CheckForUpdates: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const checkForUpdates = async () => {
    setIsLoading(true);
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        setIsUpdated(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {!isLoading && isUpdated && (
        <Button
          title="An update is available. Reload the app?"
          onPress={() => Updates.reloadAsync()}
        />
      )}
      {!isLoading && !isUpdated && <Text>The app is up to date.</Text>}
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
});

export default CheckForUpdates;

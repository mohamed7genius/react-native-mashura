import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Request from './Request';
import type { RequestsType } from '../types/requests';

const Requests = ({ userId }: { userId: string }) => {
  const [requests, setRequests] = useState<RequestsType>([]);

  useEffect(() => {
    // Convert to a hook with a real api call
    setRequests([]);
  }, []);

  return (
    <View>
      {requests?.length > 0 ? (
        <View style={styles.requestsContainer}>
          {requests.map((request) => (
            <Request
              key={request.title}
              title={request.title}
              description={request.description}
              votesIds={request.votesIds}
              userId={userId}
            />
          ))}
        </View>
      ) : (
        <Text style={styles.noRequestsText}>No requests</Text>
      )}
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({
  requestsContainer: {
    gap: 10,
  },
  noRequestsText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
});

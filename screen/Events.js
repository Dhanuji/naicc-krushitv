import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
const Eventgovi = () => {
  const [playlistData, setPlaylistData] = useState([]);
  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
    const apiKey = 'AIzaSyCWBA-_bmPSoMFd51vk62goJABEVNaFP0M';
    const playlistId = 'PLWQ5Ps8soI9jmuXrR6-C0rCbE1SctpcOx';
    // Fetch playlist data using YouTube Data API
    axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        part: 'snippet',
        maxResults: 50,
        playlistId,
        key: apiKey,
      }
    })
    .then(response => {
      setPlaylistData(response.data.items);
    })
    .catch(error => {
      console.error('Error fetching playlist data:', error);
    });
  }, []);
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.snippet.title}</Text>
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}` }}
        style={{ height: 200 }}
      />
    </View>
  );
  return (
    <View>
      <FlatList
        data={playlistData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Eventgovi;
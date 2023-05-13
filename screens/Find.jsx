import { StyleSheet, View, ActivityIndicator, Alert } from 'react-native';
import SearchButton from '../components/Search';
import { useState } from 'react';
import Info from '../components/Info';

const apiKey = '?token=4bf2fb6b0ee8255e5082914a446992225f1ad250';

export default function App() {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`https://api.waqi.info/feed/${searchText}/${apiKey}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();

            if (responseData.status !== 'error') {
                setData(responseData);
            } 
        } catch (error) {
            Alert.alert('Error', 'There was an error fetching the data. Please try again later.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : data ? (
                <Info info={data} />
            ) : null}
            <SearchButton text={searchText} change={setSearchText} click={handleSearch} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

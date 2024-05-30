import { Image, StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { tasks } from './constants'
import { SearchInput } from './components/search-input.component';
import { CategoryComponent } from './components/category-card.component';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.title}>Hello, Devs</Text>
          <Text>{tasks.length} Tasks today</Text>
        </View>
        <View>
            <Image 
              source={require('./assets/images/user.png')}
              style={{  width: 50, height: 50 }}  
              />
        </View>
      </View> 
      <SearchInput />
      <CategoryComponent />
      <View>
        <Text>Ongoing Tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9ECEE',
    height: '100%',
    maxHeight: `calc(100%-${StatusBar.currentHeight})`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 1,
    marginBottom: 20
  },
});

import { StyleSheet, View, Text, Image, FlatList } from "react-native"

export function CategoryComponent({ categories, tasks }){

    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <FlatList
                data={Object.values(categories)}
                keyExtractor={ item => item.accentColor}
                horizontal
                renderItem= {
                    ({item, index}) => (
                        <View style={styles.card}>
                            <View style={{
                                    width: 35,
                                    height: 2,
                                    borderRadius: 10,
                                    marginBottom: 4,
                                    backgroundColor: item.color,
                                }} 
                            />
                            <Text style={styles.categoryTitle}>{item.title}</Text>
                            <Text style={styles.categorySubtitle}>{tasks.filter( a => a.category == Object.keys(categories)[index] ).length} Task(s)</Text>
                            <Image
                                source={item.image}
                                style={styles.categoryImage}
                            />
                        </View>
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    card: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#F9ECEE',
        borderWidth: 2,
        marginRight: 15,
        shadowOffset: 5,
        shadowColor: '#F9ECEE',
        shadowOpacity: 0.5,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 15,
    },
    categoryTitle: {
        fontSize: 21,
        fontWeight: '600'
    },
    categorySubtitle: {
        fontSize: 12,
    },
    categoryImage: {
        height: 150,
        aspectRatio: 1.3
    },
})
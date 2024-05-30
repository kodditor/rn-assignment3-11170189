import { StyleSheet, View, Text } from "react-native"

export default function TasksComponent({ categories, tasks }){

    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
            {
                tasks.sort((a,b) => new Date(a.scheduledDate) - new Date(b.scheduledDate)).map((item, idx) => (
                    <View style={styles.card} key={idx}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <View style={styles.cardDetails}>
                            <View 
                            style={{
                                ...styles.cardCategoryContainer,
                                backgroundColor: categories[item.category].accentColor,
                            }}>
                                <Text
                                    style={{
                                        color: categories[item.category].color,
                                        fontSize: 11,
                                        fontWeight: '700'
                                    }}
                                >{categories[item.category].title}</Text>
                            </View>
                                <Text>•</Text>
                                <Text style={styles.cardDate}>{new Date(item.scheduledDate).toLocaleDateString()}</Text>
                            
                        </View>
                    </View>   
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 15,
    },
    card: {
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 2,
        borderColor: '#F9ECEE'
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 7,
    },
    cardDetails: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    cardCategoryContainer: {
        height: 20,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDate: {
        fontSize: 11,
    }
})
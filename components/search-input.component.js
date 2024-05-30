import { View, StyleSheet, TextInput, Button, TouchableHighlight } from "react-native";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";


export function SearchInput(){
 
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor={'black'}
                 />
                 <MagnifyingGlassIcon
                  size={22}
                  style={styles.inputIcon}
                  />
            </View>
            <TouchableHighlight style={styles.filterButtonContainer}>
                    <AdjustmentsHorizontalIcon style={{color: 'white'}} size={30} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30
    },
    inputContainer: {
        display: 'block',
        position: 'relative',
    },  
    searchInput: {
        backgroundColor: 'white',
        paddingLeft: 45,
        width: 250,
        height: 50,
        borderRadius: 15,
        fontSize: 18,
        fontWeight: '500'
    },
    inputIcon: {
        display: 'block',
        position: 'absolute',
        top: 14,
        left: 12,
        color: 'black'
    },
    filterButtonContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#F9A826',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }   
})
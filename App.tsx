import { Text, View, TextInput, Button } from "react-native";
import Toast from "react-native-toast-message"


function App() {

  const showToastMessage = () => {
    Toast.show({
      type: 'success',
      text1: 'logged in!',
      text2: 'welcome',
      position: 'bottom',
    })
  }

  return (

    <>
      {/* main layout */}
      <View style={{
        margin: 20,
        flexDirection: "column",
        gap: 24
      }
      }>
        {/* header */}
        <Text style={{
          fontSize: 32,
        }}>
          GoldShip
        </Text>

        {/* name group */}
        <View style={{
          flexDirection: "column",
          gap: 6
        }}>
          <Text style={{
            marginTop: 10,
            fontSize: 20
          }}
          >
            username
          </Text>
          <TextInput style={{
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 8
          }} />
        </View>

        {/* password group */}
        <View style={{
          flexDirection: "column",
          gap: 6
        }}>
          <Text style={{
            marginTop: 10,
            fontSize: 20
          }}
          >
            password
          </Text>
          <TextInput style={{
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 8
          }} />

        </View>
        {/* button */}
        <Button
          title="login"
          onPress={showToastMessage}
        />
      </View >
      <Toast />
    </>
  );
}


export default App;

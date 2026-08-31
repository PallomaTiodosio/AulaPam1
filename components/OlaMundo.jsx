function OlaMundo(){
    return(
        <View>    
           <Text style={{color: 'blue', fontSize: 30}}>Ola Mundo</Text>
           <images source={require("./assets/Jimin_JK")}></images>
           <Button title='Click aqui' onPress={()=>alert("Ola Mundo")}></Button>
        </View>
    )
}


const style = StyleSheet.create(
    {
        text:{
            color: 'red',
            fontSize: 24,
        },
    }
)
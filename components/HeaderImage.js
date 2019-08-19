const ImageHeader = props => (
  <View style={{ backgroundColor: '' }}>
    <Image
      style={StyleSheet.absoluteFill}
      source={require('../assets/images/1500x500.jpeg')}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }} />
  </View>
);

module.exports = ImageHeader;

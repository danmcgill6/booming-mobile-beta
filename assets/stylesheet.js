import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FCFFF7'
  },
  headerImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch'
  },
  homeContentContainer: {
    backgroundColor: 'white',
    flex: 1

    // paddingTop:10,
  },
  appListItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    height: 60,
    alignItems: 'center'
  },
  appsScreenContainer: {
    backgroundColor: 'white'
  },
  appListTitle: {
    fontSize: 22
  },
  appListContainer: {
    padding: 10
  },
  articleContainer: {
    height: 85,
    width: 65
  },
  articlePageContainer: {
    flexDirection: 'row'
  },
  categoryCard: {
    width: 125,
    height: 130
  },
  articleBannerImage: {
    height: 250,
    flex: 1
  },
  articlePreviewImage: {
    height: 150,
    width: 140
  },
  articleText: {
    alignSelf: 'center',
    fontSize: 15,
    // fontWeight: 'bold',
    marginTop: 2,
    color: 'black'
  },
  // cardWrapper:{
  //   shadowColor: '#000',
  //   shadowOffset: { width: 3, height: 3 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 4,
  // },
  cardStyle: {
    paddingLeft: 1,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 15,
    marginRight: 0,
    borderColor: 'white',
    borderRightWidth: 0
  },
  card: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 2,
    marginBottom: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  articleCard: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 15,
    paddingTop: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 2,
    marginBottom: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  twitDisplayerBackButton: {
    position: 'absolute',
    left: 25,
    top: 45,
    zIndex: 99
  },
  dialog: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    height: 1000,
    width: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  singleTweetContent: {
    position: 'absolute',
    top: 100,
    width: 300,
    height: 250,
    borderRadius: 10,
    zIndex: 100,
    backgroundColor: 'white'
  },
  singleTweetContainer: {
    width: 300,
    height: 250
  },
  singleTweetTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    height: 100
  },
  singleTweetText: {
    color: 'black',
    fontSize: 16
  },
  singleTweetTextContainer: {
    padding: 10
  },
  tweetPreviewtext: {
    color: 'grey'
  },
  tweetDisplayer: {
    height: 1000,
    overflow: 'visible'
  },
  articlePreviewText: {
    color: 'white',
    fontWeight: 'bold'
  },
  singleTweetuserName: {
    alignSelf: 'center',
    marginLeft: 10
  },
  featuredArticles: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'white',
    paddingBottom: 12,
    marginTop: 25
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  categoryText: {
    fontSize: 19,
    color: '#000'
  },

  table: {
    flex: 1,
    shadowColor: 'black',
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
    paddingTop: 10,
    marginHorizontal: 10,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 2,
    marginBottom: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },

  forumInputContainer: {
    flex: 1,
    paddingTop: 75,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#bac9cc'
  },

  forumPostTitle: {
    fontSize: 25,
    color: 'white',
    marginTop: 15
  },

  titleInput: {
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10
  },

  forumThreadIconContainer: {
    position: 'absolute',
    right: 10
  },
  upButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  questionInput: {
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    width: 300,
    height: 200,
    borderRadius: 10
  },

  forumPostSubmitText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15
  },

  forumPostSubmit: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#07b524',
    borderRadius: 10,
    marginTop: 30
  },

  forumPostErrortText: {
    marginTop: 30,
    fontSize: 20,
    color: 'red'
  },

  forumThreadContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8e6e1',
    paddingLeft: 7
  },

  forumThreadLikes: {
    marginLeft: 4
  },

  forumThreadQuestion: {
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    minHeight: 50,
    maxWidth: 250,
    minWidth: 250,
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 25,
    marginLeft: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15
  },

  forumThreadBottomComntainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: 'white'
  },

  commentButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    top: 10
  },
  likeQuestionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 15,
    top: 10
  },

  forumThreadQuestionContainer: {
    flexDirection: 'row',
    width: 325,
    minHeight: 100
  },
  avatar: {
    width: 50,
    height: 50
  },

  forumThreadContentContainer: {
    flex: 1,
    paddingTop: 75,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#bac9cc',
    marginBottom: 85
  },

  likeCommentButton: {
    position: 'absolute',
    right: -25,
    top: 25
  },

  forumThreadText: {
    fontSize: 15,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  tableRowContainer: {
    flex: 1,
    padding: 3,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingLeft: 5,
    paddingRight: 0,
    paddingBottom: 3,
    paddingTop: 3,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D5896F',
    marginBottom: 10
  },

  forumContainer: {
    marginTop: 30,
    padding: 7,
    backgroundColor: '#fffef7',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 10,
    borderColor: '#2e5489'
  },

  appPlaceText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Georgia'
  },

  thumbnailContainer: {
    borderRadius: 5,
    marginLeft: 5
  },
  thumbnail: {
    height: 50,
    width: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10
  },
  topTenHeader: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'Georgia-Bold',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15
  },
  aboutUsText: {
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 35,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Georgia'
  },
  tweets: {
    fontFamily: 'Avenir-Book',
    fontSize: 15,
    color: 'black',
    marginLeft: 5
  },

  twitterData: {
    position: 'absolute',
    right: 40,
    flexDirection: 'row'
  },

  tableText: {
    fontFamily: 'Avenir-Book',
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black'
  },
  tweetView: {
    height: 30
  },
  tweetsContainer: {
    flex: 1,
    borderColor: '#12092f',
    borderWidth: 3,
    marginTop: 3,
    borderRadius: 25
  },
  appTitle: {
    marginLeft: 15,
    fontSize: 20,
    color: 'black',

    fontFamily: 'Georgia'
  },
  appTitleSmall: {
    marginLeft: 15,
    fontSize: 15,
    color: 'black',
    fontFamily: 'Georgia'
  },
  hotOneHundredHeaderContainer: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  hotOneHundredHeader: {
    fontFamily: 'Didot-Italic',
    fontSize: 35,
    color: 'white'
  },
  singleAppScreenContainer: {
    backgroundColor: '#fffef7',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10
    // backgroundColor: '#fffef7'
  },
  SingleAppImage: {
    height: 110,
    width: 110,
    alignSelf: 'center',
    borderRadius: 55
    // backgroundColor: 'black'
  },
  SingleAppTopRow: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 7
  },

  singleAppTitle: {
    marginTop: 10,
    fontSize: 30,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginLeft: 15
  },
  singleAppDescriptionText: {
    marginTop: 13,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    lineHeight: 27,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Georgia'
  },
  singleAppDescription: {
    marginTop: 20,
    padding: 7,
    backgroundColor: '#fffef7',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 10,
    borderColor: '#2e5489'
    // borderWidth:4
  },
  singleAppDescriptionHeader: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  singleAppTweetsHeader: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  forumHeader: {
    fontSize: 25,
    marginBottom: 10,
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center'
  },

  webViewContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 350,
    height: 640,
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: 'white',
    marginBottom: 15
  },
  webViewHeaderText: {
    fontSize: 35,
    color: 'black',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: 'center'
  },
  singleAppTweetsContainer: {
    borderRadius: 10,
    backgroundColor: '#fffef7',
    padding: 7,
    maxHeight: 400
  },
  singleAppWidgetContainer: {
    borderRadius: 10,
    backgroundColor: '#fffef7',
    padding: 7,
    maxHeight: 400
  },
  singleAppTweetView: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: '#fffef7',
    // borderRadius: 10,
    marginTop: 30
  },
  singleAppTwitterLogoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderBottomColor: '#381D2A',
    paddingTop: 35,
    alignItems: 'center',
    color: '#50d890',
    backgroundColor: '#FCFFF7',
    height: 95,
    fontFamily: 'Al Nile',
  },
  featuredArticlesText: {
    fontSize: 25,
    color: '#235789',
    alignSelf: 'center',
    fontWeight: 'bold',
    borderBottomColor: '#fcfcfc',
    borderBottomWidth: 1,
    fontFamily: 'Georgia-Bold',
    marginBottom: 7,

  },
  headerText: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Cochin',
    fontWeight: '500'
    // fontWeight: 'bold'
  },
  homescreenText: {
    fontSize: 19,
    fontFamily: 'Georgia-Italic',
    lineHeight: 30,
    padding: 8,
    color: 'white',
    marginBottom: 95
  },
  iosArrow: {
    position: 'absolute',
    right: 15
  },
  articleDisplayerContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  articlePageHeader: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'ArialHebrew-Bold',
    alignSelf: 'center'
  },
  singleTweetProfImage: {
    borderRadius: 35,
    position: 'absolute',
    top: 15,
    left: 30,
    width: 70,
    height: 70
  },

  singleAppTweetCard: {
    paddingTop: 0,
    maxHeight: 350,
    overflow: 'hidden'
  },
  forumTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  forumSearch: {
    flex: 3,
    marginRight: 10
  },
  forumStar: {},
  forumListStyle: {
    flexDirection: 'row',
    flex: 1
  },
  forumIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6
  },

  searchScreenContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  loginInput: {
    width: 200,
    height: 44,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10
  },
  headerFirstLetter: {
    fontSize: 35,
    color: '#D5896F',
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: 'center'
  }
});

export default styles;
import { Navigation } from 'react-native-navigation';

export const goToIssues = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsID',
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'IssuesList',
                    options: {
                      topBar: {
                        title: {
                          text: 'Issues List',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                popGesture: true,
                topBar: {
                  background: {
                    color: 'lightgrey',
                  },
                },
                bottomTab: {
                  text: 'Issues',
                  textColor: 'red',
                  selectedTextColor: 'blue',
                  // icon: require('./signin.png')
                },
                bottomTabs: {
                  backgroundColor: 'lightgrey',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'FavouritesIssues',
                  },
                },
              ],
              options: {
                popGesture: true,
                bottomTab: {
                  text: 'Issues',
                  textColor: 'red',
                  selectedTextColor: 'blue',
                  // icon: require('./signin.png')
                },
              },
            },
          },
        ],
      },
    },
  });

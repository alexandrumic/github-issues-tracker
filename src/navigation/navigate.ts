import { Navigation } from 'react-native-navigation';
import { icons } from '../assets';

export const goToHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'HomeStack',
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  visible: false,
                  height: 0,
                },
              },
            },
          },
        ],
      },
    },
  });

export const goToIssues = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabs',
        children: [
          {
            stack: {
              id: 'IssuesStack',
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
                bottomTab: {
                  text: 'List',
                  icon: icons.listWhite,
                  selectedIcon: icons.listBlue,
                },
              },
            },
          },
          {
            stack: {
              id: 'FavIssuesStack',
              children: [
                {
                  component: {
                    name: 'FavouritesIssues',
                    options: {
                      topBar: {
                        title: {
                          text: 'Favourites',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Favourites',
                  icon: icons.starWhite,
                  selectedIcon: icons.starBlue,
                },
              },
            },
          },
        ],
      },
    },
  });

export const openFiltersModal = () =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: 'FiltersModal',
            name: 'FiltersModal',
            options: {
              topBar: {
                title: {
                  text: 'Filters Modal',
                },
              },
            },
          },
        },
      ],
    },
  });

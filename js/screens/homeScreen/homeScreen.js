
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Image } from 'react-native';


import { Container, Header, Title, Button, Left, Right, Body, Icon, Text, ListItem, CheckBox, Fab, Footer, FooterTab, Badge,
     Content, Card, CardItem, Thumbnail } from 'native-base';


const styles = StyleSheet.create({
    container:{
    }
});

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'true'
        };
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
                <Content>
                    <Card >
                        <CardItem>
                            <Left>
                               <Icon name='md-school' />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image style={{width: 360, height: 200}}
                              source={{uri: 'https://scotch.io/wp-content/uploads/2016/07/ckNko8BBRIGjBKsR1GV9_Banner.jpg'}} />
                          </CardItem>
                          <CardItem>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 Likes</Text>
                              </Button>
                              <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>4 Comments</Text>
                              </Button>
                              <Text>11h ago</Text>
                        </CardItem>
                   </Card>
                   <Button full>
                        <Text>Click Me! </Text>
                    </Button>
                </Content>

                <Footer >
                    <FooterTab>
                          <Button badge vertical>
                              <Badge><Text>2</Text></Badge>
                              <Icon name="apps" />
                              <Text>Apps</Text>
                          </Button>
                          <Button>
                              <Icon name="camera" />
                              <Text>Camera</Text>
                          </Button>
                          <Button active badge vertical>
                              <Badge ><Text>51</Text></Badge>
                              <Icon active name="navigate" />
                              <Text>Navigate</Text>
                          </Button>
                          <Button>
                              <Icon name="person" />
                              <Text>Contact</Text>
                          </Button>
                      </FooterTab>
                </Footer>
            </Container>
        );
    }
}

HomeScreen.propTypes = {
};

export default HomeScreen;

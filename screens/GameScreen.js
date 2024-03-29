// GameScreen.js
import React, { useEffect, useState } from 'react';
import PlaneContext from '../systems/PlaneContext';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Plane from '../components/Plane';
import ScrollingBackground from '../components/Background';
import Physics from '../systems/Physics';
import ObstacleSystem from '../systems/ObstacleSystem';
import { useGameState } from '../systems/GameStateContext';

const GameScreen = ({ navigation }) => {
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [score, setScore] = useState(0); // Score state
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const { isRunning, setIsRunning } = useGameState(); // Access the setIsRunning function

  // Retrieve the plane index from navigation parameters
  const planeIndex = navigation.getParam('selectedPlaneIndex', 1); // Default to 1;

  const onEvent = (e) => {
    if (e.type === 'game-over') {
      setIsRunning(false);
      setGameHasStarted(false);
      navigation.navigate('EndScreen', {score: score});  //Pass score to display score
    } else if (e.type === 'score') {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    if (navigation.getParam('reset')){
      resetGame();
    }
  }, [navigation]);

  const startGame = () => {
    setScore(0);
    setIsRunning(true);
    setGameHasStarted(true);
  };

  const resetGame = () => {
    setScore(0);
    setIsRunning(false);
    setGameHasStarted(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.gameContainer} 
        activeOpacity={1} 
        onPress={() => !gameHasStarted && startGame()}
      >
        {!isRunning && !gameHasStarted && (
          <Text style={styles.startText}>Tap Screen to Start</Text>
        )}
        <PlaneContext.Provider value={{ planeIndex }}>
          <GameEngine
            ref={(ref) => { this.gameEngine = ref; }}
            style={styles.gameContainer}
            running={isRunning}
            onEvent={onEvent}
            entities={{
              physics: { engine: {}, world: {} },
              background: { scrollX: 0, renderer: <ScrollingBackground /> },
              plane: { 
                body: { 
                  position: { x: screenWidth * 0.1, y: screenHeight / 2 - 50 }, 
                  velocity: { x: 0, y: 0 }, 
                  size: { width: 50, height: 50 } 
                },
                renderer: <Plane />,
              },
              //obstacle system for dynamic obstacles
            }}
            systems={[Physics, ObstacleSystem]}
          >
            <Text style={styles.score}>{score}</Text>
          </GameEngine>
        </PlaneContext.Provider>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  startText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    zIndex: 1002,
  },
  score: {
    position: 'absolute',
    fontSize: 40,
    color: 'black',
    top: Dimensions.get('window').height * 0.1,
    left: Dimensions.get('window').width * 0.1,
  }
});

export default GameScreen;

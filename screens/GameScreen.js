
//COMBINING WORKING OBJECTS WITH INITIAL CODE
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Plane from '../components/Plane';
import Background from '../components/Background';
import Physics from '../systems/Physics';
import ObstacleSystem from '../systems/ObstacleSystem';
import Obstacle from '../components/Obstacles';

const GameScreen = () => {
  const [running, setRunning] = useState(false);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [score, setScore] = useState(0); // Score state

  const onEvent = (e) => {
    if (e.type === 'game-over') {
      setRunning(false);
      setGameHasStarted(false);
    } else if (e.type === 'score') {
      setScore(score + 1);
    }
  };

  const startGame = () => {
    setScore(0);
    setRunning(true);
    setGameHasStarted(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.gameContainer} 
        activeOpacity={1} 
        onPress={() => !gameHasStarted && startGame()}
      >
        {!running && !gameHasStarted && (
          <Text style={styles.startText}>Tap Screen to Start</Text>
        )}
        <GameEngine
          ref={(ref) => { this.gameEngine = ref; }}
          style={styles.gameContainer}
          running={running}
          onEvent={onEvent}
          entities={{
            physics: { engine: {}, world: {} },
            plane: { body: { position: { x: 50, y: 300 }, velocity: { x: 0, y: 0 }, size: { width: 50, height: 50 } }, renderer: <Plane /> },
            background: { scrollX: 0, renderer: <Background /> },
            // Include the obstacle system for dynamic obstacles
          }}
          systems={[Physics, ObstacleSystem]} // Include your game systems here
        >
          <Text style={styles.score}>Score: {score}</Text>
        </GameEngine>
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
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
    alignSelf: 'center',
  },
  score: {
    position: 'absolute',
    fontSize: 30,
    top: 10,
    left: 10,
  }
});

export default GameScreen;

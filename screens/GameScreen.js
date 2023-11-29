// screens/GameScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Plane from '../components/Plane';
import Physics from '../systems/Physics';

const GameScreen = () => {
  console.log('GameScreen is rendered');
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
// In GameScreen.js
<Plane body={{ position: { x: Dimensions.get('window').width / 2, y: Dimensions.get('window').height / 2 } }} />

  return (
    <View style={styles.container}>
      <Plane body={{ position: { x: 50, y: 300 } }} />
      <TouchableOpacity style={styles.gameContainer} activeOpacity={1} onPress={gameHasStarted ? null : startGame}>
        {!running && !gameHasStarted && (
          <Text style={styles.startText}>Tap Plane to Start</Text>
        )}
        <GameEngine
          ref={(ref) => { this.gameEngine = ref; }}
          style={styles.gameContainer}
          running={running}
          onEvent={onEvent}
          entities={{
            physics: { engine: {}, world: {} },
            plane: { body: { position: { x: 50, y: 300 }, velocity: { x: 0, y: 0 }, size: { width: 50, height: 50 } }, renderer: <TouchableOpacity onPress={startGame}><Plane /></TouchableOpacity> },
          }}
          systems={[Physics]}
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
    backgroundColor: 'lightgrey',
  },
  gameContainer: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white', // Temporary background color for visibility
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

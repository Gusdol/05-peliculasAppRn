import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const ActorItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri}} style={{width: 50, borderRadius: 10}} />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 14, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: 'white',
    borderRadius: 10,
    paddingRight: 10,
    height: 50,
    marginHorizontal: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
});

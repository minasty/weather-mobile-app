import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 29,
    marginBottom: 10,
    color: 'purple',
    fontWeight:'bold',
  },
    input: {
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  result: {
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 25, // 👈 THIS makes it round
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  aboutButton: {
  marginTop: 20,
  padding: 12,
  backgroundColor: '#333',
  borderRadius: 20,
},

aboutText: {
  color: 'white',
  fontSize: 16,
}
});
import { mapState, mapActions } from 'vuex';

export const UserMixins = {
  computed: {
    ...mapState(
        'User',{
            user: state => {
                return state.user;
            }
        }
    )
  },
  methods: {
    ...mapActions('User',['login'])
  }
}
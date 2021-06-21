
<script>
import 'particles.js';
export default {
  name: 'BackgroundParticles',

  mounted() {
    this.init();
  },

  methods: {
    init() {
      // eslint-disable-next-line no-undef
      particlesJS('bg-particles',
        {
          'particles': {
            'number': {
              'value': 40,
              'density': {
                'enable': true,
                'value_area': 1000
              }
            },
            'color': {
              'value': '#ffffff'
            },
            'shape': {
              'type': ['circle'],
              'stroke': {
                'width': 0,
                'color': '#000000'
              },
              'polygon': {
                'nb_sides': 5
              }
            },
            'opacity': {
              'value': 0.5,
              'random': false,
              'anim': {
                'enable': false,
                'speed': 0.1,
                'opacity_min': 0.1,
                'sync': false
              }
            },
            'size': {
              'value': 5,
              'random': true,
              'anim': {
                'enable': false,
                'speed': 40,
                'size_min': 0.1,
                'sync': false
              }
            },
            'line_linked': {
              'enable': true,
              'distance': 150,
              'color': '#ffffff',
              'opacity': 0.4,
              'width': 1
            },
            'move': {
              'boolean': true,
              'enable': true,
              'speed': 2.5,
              'direction': 'none',
              'random': false,
              'straight': false,
              'out_mode': 'out',
              'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
              }
            }
          },
          'interactivity': {
            'detect_on': 'window',
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'grab'
              },
              'onclick': {
                'enable': false
              },
              'resize': true
            },
            'modes': {
              'grab': {
                'distance': 200, // 连接线长度
                'line_linked': {
                  'opacity': 0.7
                }
              },
              'bubble': {
                'distance': 1000,
                'size': 40,
                'duration': 2,
                'opacity': 8,
                'speed': 3
              },
              'repulse': {
                'distance': 200
              },
              'push': {
                'particles_nb': 4
              },
              'remove': {
                'particles_nb': 2
              }
            }
          },
          'retina_detect': false,
          'config_demo': {
            'hide_card': false,
            'background_color': '#b61924',
            'background_image': '',
            'background_position': '50% 50%',
            'background_repeat': 'no-repeat',
            'background_size': 'cover'
          },
          'adsorption': true // 加上吸附配置
        }
      );
    }
  },

  render() {
    return (
      <div id='bg-particles' />
    );
  }
};
</script>

<style >
#bg-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

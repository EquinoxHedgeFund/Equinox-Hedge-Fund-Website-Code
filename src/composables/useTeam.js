import { ref } from 'vue'
import strapi, { unwrapCollection } from '../api/strapi'
import { teamMembers as fallbackTeam } from '../data/team'

const STRAPI_URL = 'http://localhost:1337'

export function useTeam() {
  const teamMembers = ref([])
  const loading = ref(true)
  const error = ref(null)

  async function fetchTeam() {
    try {
      loading.value = true
      const res = await strapi.get('/team-members?sort=sortOrder:asc&populate=*')
      const items = unwrapCollection(res)
      if (items.length > 0) {
        teamMembers.value = items.map((item) => ({
          name: item.name || '',
          role: item.role || '',
          roleEn: item.roleEn || item.role || '',
          school: item.school || '',
          schoolEn: item.schoolEn || item.school || '',
          avatar: item.avatar?.data?.attributes?.url ? STRAPI_URL + item.avatar.data.attributes.url : null,
        }))
      } else {
        teamMembers.value = fallbackTeam
      }
    } catch (e) {
      error.value = e
      teamMembers.value = fallbackTeam
    } finally {
      loading.value = false
    }
  }

  fetchTeam()

  return { teamMembers, loading, error }
}

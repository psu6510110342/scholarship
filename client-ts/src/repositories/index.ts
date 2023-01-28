import { AnnouncementRepository } from "./AnnouncementRepository"
import { UserResultRepotiory } from "./UserResultRepository"

const repositories = {
  announcements: new AnnouncementRepository(),
  userResults: new UserResultRepotiory()
}

export default repositories
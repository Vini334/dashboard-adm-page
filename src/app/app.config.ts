import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Users, UserPlus, Heart, MessageSquare, Share2, Activity } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    importProvidersFrom(
      LucideAngularModule.pick({ Users, UserPlus, Heart, MessageSquare, Share2, Activity })
    )
  ]
};

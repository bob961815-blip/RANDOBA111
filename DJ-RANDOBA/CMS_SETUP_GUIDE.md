# RANDOBA CMS Setup Guide

## How to Make Event Cards Editable Through Builder.io CMS

### Step 1: Connect Builder.io CMS
1. **Connect to Builder.io**: Click the ["MCP Servers" button](#open-mcp-popover) and connect to **Builder.io CMS**
2. **Get API Key**: Once connected, you'll get a Builder.io API key

### Step 2: Set Environment Variable
Add this environment variable to your project:
```
VITE_BUILDER_API_KEY=your_builder_api_key_here
```

### Step 3: Create Content Model in Builder.io
In your Builder.io dashboard, create a new **Model** called `events` with these fields:

#### Event Model Fields:
- **id** (Text) - Unique identifier
- **title** (Text) - Event title
- **description** (Long Text) - Event description  
- **image** (Image) - Event featured image
- **date** (Text) - Event date
- **location** (Text) - Event location
- **price** (Number) - Event price
- **category** (Select) - Options: Workshop, Masterclass, Live Event, Course
- **level** (Select) - Options: Beginner, Intermediate, Advanced, All Levels
- **spotsLeft** (Number) - Available spots
- **totalSpots** (Number) - Total spots
- **rating** (Number) - Event rating (1-5)
- **instructor** (Text) - Instructor name
- **duration** (Text) - Event duration
- **featured** (Boolean) - Is featured event
- **slug** (Text) - URL slug

### Step 4: Features You'll Get

#### ✅ **Easy Content Management**
- **Edit Events**: Change titles, descriptions, dates, prices through Builder.io interface
- **Upload Images**: Drag & drop new event images
- **Add/Remove Events**: Create new events or hide existing ones
- **Real-time Updates**: Changes appear immediately on your website

#### ✅ **Non-Technical Editing**
- **Visual Editor**: Edit content without coding
- **Media Library**: Organize and reuse images
- **Preview Changes**: See how content looks before publishing
- **Version Control**: Revert to previous versions if needed

#### ✅ **Team Collaboration**
- **Multi-user Access**: Team members can edit content
- **Permissions**: Control who can edit what
- **Workflow**: Approval process for content changes
- **Comments**: Leave notes on content

### Step 5: Content Management Workflow

#### Adding New Events:
1. Go to Builder.io dashboard
2. Navigate to `events` model
3. Click "New Entry"
4. Fill in event details
5. Upload event image
6. Set category, level, pricing
7. Toggle "featured" if it's a special event
8. Publish

#### Editing Existing Events:
1. Find event in Builder.io `events` list
2. Click to edit
3. Modify any field (text, image, pricing, etc.)
4. Save changes
5. Changes appear live on website

#### Managing Event Images:
1. **Upload**: Drag & drop images in Builder.io
2. **Optimize**: Builder.io auto-optimizes images for web
3. **Resize**: Images automatically resize for different devices
4. **CDN**: Fast global image delivery

### Step 6: Advanced Features

#### Dynamic Content:
- **Scheduling**: Set events to appear/disappear on specific dates
- **A/B Testing**: Test different event descriptions
- **Localization**: Multiple language support
- **SEO**: Automatic SEO optimization

#### Integration Benefits:
- **No Code Changes**: Add/edit events without developer
- **Fast Loading**: Optimized content delivery
- **Mobile Optimized**: Content works on all devices
- **Search Friendly**: SEO-optimized content structure

### Step 7: Alternative CMS Options
If you prefer other CMS solutions, we can also integrate:
- **Strapi** - Open source headless CMS
- **Contentful** - Enterprise CMS solution  
- **Sanity** - Real-time collaborative CMS
- **Ghost** - Publishing-focused CMS

### Need Help?
- **Technical Setup**: I can help implement the CMS integration
- **Content Migration**: Transfer existing events to CMS
- **Training**: Guide your team on using the CMS
- **Custom Fields**: Add more event data fields as needed

The Builder.io integration will transform your static event cards into a fully manageable content system that anyone on your team can update!

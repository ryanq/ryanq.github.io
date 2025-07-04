---
title: Just use the physical port
layout: '@layouts/Post.astro'
---

I've been on a mission to rid our church's computers of all Ethernet adapters. When I first came on staff, most of them that needed access to the normal [VLAN](https://en.wikipedia.org/wiki/VLAN) (for internet access, among other things) and the Dante VLAN would have one Ethernet cable connected to the internal port and another connected using an external Ethernet adapter.

My first few tries getting both to use the same cable (by setting it up as a [trunk link](https://en.wikipedia.org/wiki/Trunking)) weren't successful, but I finally landed on the solution: **The Audinate apps (Virtual Soundcard, Via, Controller) on macOS require that you use a physical port.** (Windows users will _not_ need to jump through these hoops.)

The other services we've used have been fine with virtual ports, so we reserve the physical port for Dante and make a virtual port for every other VLAN. We've been using it across several of our campuses since, with no problems!

<section role="note">

## A bit about VLANs and trunk links

I did get some initial push back on using trunk links, I think because it sounds like they're doing a lot of work. A trunk link is carrying multiple VLANs' traffic. In order to keep that straight, the network adds [a small header](https://en.wikipedia.org/wiki/IEEE_802.1Q) (4 bytes long) that includes the VLAN ID number.

What makes the difference in this situation with Dante, is that the Dante VLAN is configured on the switch to be _untagged_. Let's dig into what that means. Switch ports can be set up in a couple ways:

- An _access_ port is a port that doesn't do any tagging. Frames coming into the port is assigned to one VLAN and only traffic from that VLAN will leave the port.
- A _trunk_ port is a port that can take in and send tagged frames for a limited set of VLANs. But they can have a _native_ or _untagged_ VLAN (terminology will vary based on your switch manufacturer). When this is set, untagged frames will be assigned to _that_ VLAN and that VLAN's traffic is sent without the extra tag.

On a computer that is connected to a trunk link, there will be virtual ports associated with the physical port. The virtual port's only function is to add the extra tag to frames and pass them to the physical port. The physical port can still be used and will send untagged frames.

</section>

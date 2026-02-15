---
title: Dante wants to use the physical port
slug: dante-on-physical-ports-only
publish_date: 2025-07-04T08:00:00
update_date: 2026-02-15T08:00:00
---

I've been on a mission to rid our church's computers of all Ethernet adapters.
Most of them that needed access to the normal [VLAN][w:VLAN] (for internet
access, among other things) and the Dante VLAN would have one Ethernet cable
connected to the internal port and another connected using an external USB-C to
Ethernet adapter.

My first few tries getting both to use the same cable (by setting it up as a
[trunk link][w:Trunking]) weren't successful, but I finally landed on the
solution: **The Audinate apps (Virtual Soundcard, Via, Controller) on macOS
require that you use a physical port.** (The few Windows computers we use did
_not_ need us to jump through these hoops.) To set this up on your switch, the
port needs to accept untagged traffic for the Dante VLAN. The rest of the VLANs
will be tagged (because there can only be one untagged).

I did get some initial push back on using trunk links, because it sounds like
they're doing a lot of work. A trunk link is carrying multiple VLANs' traffic.
In order to keep that straight, the network adds [a small header][w:IEEE_802.1Q]
(4 bytes long) that includes the VLAN ID number.

The other services we've used have been fine with virtual ports, so we reserve
the physical port for Dante and make a virtual port for every other VLAN. We've
been using it across several of our campuses since, with no problems!

[w:VLAN]: https://en.wikipedia.org/wiki/VLAN
[w:Trunking]: https://en.wikipedia.org/wiki/Trunking
[w:IEEE_802.1Q]: https://en.wikipedia.org/wiki/IEEE_802.1Q
